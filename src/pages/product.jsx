import React, {useEffect, useState, useContext} from "react";
import { Context } from "../App";
import {useParams} from "react-router-dom";
import data from "../assets/data.json";
import { Container, Row, Col, Figure, Table, ButtonGroup, Button, Alert } from "react-bootstrap";
import {Truck} from "react-bootstrap-icons";
import { discountPrice } from "../utils/utils";

const getProductId = (item) => item?._id || item?.id;
const getProductList = (source) => {
    if (Array.isArray(source?.products)) return source.products;
    if (Array.isArray(source)) return source;
    return [];
};

export default () => {
    const {api, goods, setCart} = useContext(Context);
    const [product, setProduct] = useState({});
    const [cnt, setCnt] = useState(1);
    let params = useParams();

    useEffect(() => {
        const localProducts = getProductList(goods).length ? getProductList(goods) : getProductList(data);
        const localProduct = localProducts.find((item) => String(getProductId(item)) === String(params.id));

        if (localProduct) {
            setProduct(localProduct);
            return;
        }

        api.getProduct(params.id)
            .then(setProduct)
            .catch((err) => {
                console.error("Ошибка загрузки товара:", err);
        });
    }, [api, goods, params.id]);

    const productId = getProductId(product);
    const productPrice = Number(product.price) || 0;
    const productDiscount = Number(product.discount) || 0;
    const productWeight = product.wight || product.weight;
    const currentPrice = discountPrice(productPrice, productDiscount);

    const addToCart = () => {
        if (!productId) return;

        const item = {
            ...product,
            _id: productId,
            id: productId,
            price: productPrice,
            discount: productDiscount,
            quantity: cnt,
        };

        setCart((prev) => {
            const exists = prev.some((el) => String(getProductId(el)) === String(productId));
            if (exists) {
                return prev.map((el) =>
                    String(getProductId(el)) === String(productId)
                        ? { ...el, quantity: (Number(el.quantity) || 1) + cnt }
                        : el
                );
            }

            return [...prev, item];
        });
    };

    return <Container>
        {productId &&
        <Row>
            <Col xs={12}>
                <h1>{product.name}</h1>
            </Col>
            <Col xs={12} md={8}>
                <Figure>
                    <Figure.Image src={product.pictures}/>
                </Figure>
            </Col>
            <Col xs={12} md={4}>
                {productDiscount > 0 && <small><del>{productPrice} ₽</del></small>}
                <div><strong className={productDiscount > 0 ? "text-danger" : "text-dark"}>{currentPrice} ₽</strong></div>
                <Col xs={12} md={12}>
                <Row>
                    <Col md={6}>
                    <ButtonGroup>
                        <Button size="sm" variant="light" disabled={cnt <= 1} onClick={e => setCnt(cnt - 1)}>-</Button>
                        <Button size="sm" variant="light" disabled>{cnt}</Button>
                        <Button size="sm" variant="light" onClick={e => setCnt(cnt + 1)}>+</Button>
                    </ButtonGroup>
                    </Col>
                    {/* <Col md={1}></Col> */}
                    <Col md={6}>
                    <Button size="sm" variant="warning" style={{width: "100px"}} onClick={addToCart}>В корзину</Button>
                    </Col>
                </Row>
                <Alert variant="secondary" className="mt-3">
                    <Row><Truck/><small>Доставка по всему миру!</small>
                    </Row>
                </Alert>
            </Col>
            </Col>
            <Col xs={12}>
                <h2>Описание</h2>
                <p>{product.description}</p>
            </Col>
            <Col xs={12}>
                <h2>Характеристики</h2>
                <Table hover>
                    <tbody>
                        <tr>
                            <th>Вес</th>
                            <td>{productWeight}</td>
                        </tr>
                        <tr>
                            <th>Цена</th>
                            <td>{productPrice} ₽ за 100 грамм</td>
                        </tr>
                        <tr>
                            <th>Польза</th>
                            <td>{product.description}</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
            <Col xs={12}>
                <h2>Отзывы</h2>
            </Col>
        </Row>
        }       
    </Container>
}
