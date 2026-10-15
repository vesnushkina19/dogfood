import React, { useContext, useState } from "react";
import { Alert, Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { Context } from "../App";
import { getLocalProducts, LOCAL_PRODUCTS_KEY } from "../utils/catalog";
import Local from "../Local";

const emptyForm = {
  name: "",
  pictures: "",
  price: "",
  discount: "0",
  wight: "",
  description: "",
};

const AddProduct = () => {
  const { api, setGoods, setData, setProducts, token } = useContext(Context);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isLocalToken = String(token || "").startsWith("local-token-");

  const changeField = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setError("");
    setSuccess("");
  };

  const addToCatalog = (product) => {
    const append = (prev) => [...(Array.isArray(prev) ? prev : []), product];
    setGoods(append);
    setData(append);
    setProducts(append);
  };

  const addLocalProduct = (body) => {
    const id = `local-${Date.now()}`;
    const product = {
      ...body,
      _id: id,
      id,
      likes: [],
      available: true,
      stock: 10,
    };
    addToCatalog(product);
    Local.setItem(LOCAL_PRODUCTS_KEY, [...getLocalProducts(), product], true);
    return product;
  };

  const handler = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const body = {
      name: form.name.trim(),
      pictures: form.pictures.trim(),
      price: Number(form.price),
      discount: Number(form.discount) || 0,
      wight: form.wight.trim(),
      description: form.description.trim(),
    };

    if (!body.name || !body.pictures || !body.wight || !body.description || !body.price) {
      setError("Заполни название, картинку, цену, вес и описание.");
      return;
    }

    setIsSubmitting(true);

    try {
      if (!isLocalToken && api?.addProduct) {
        const data = await api.addProduct(body);
        if (data) {
          addToCatalog(data);
          setForm(emptyForm);
          setSuccess("Товар добавлен.");
          return;
        }
      }

      addLocalProduct(body);
      setForm(emptyForm);
      setSuccess("Товар добавлен в локальный каталог.");
    } catch (err) {
      addLocalProduct(body);
      setForm(emptyForm);
      setSuccess("API недоступен, товар сохранён локально.");
      console.error("Ошибка добавления товара:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <Row className="py-5">
        <Col xs={12}>
          <h2>Добавить товар</h2>
        </Col>
        <Col xs={12} md={6}>
          <Form onSubmit={handler}>
            <Form.Group className="mb-3">
              <Form.Label>Название товара</Form.Label>
              <Form.Control
                type="text"
                value={form.name}
                onChange={changeField("name")}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Ссылка на изображение</Form.Label>
              <Form.Control
                type="url"
                value={form.pictures}
                onChange={changeField("pictures")}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Цена товара</Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={form.price}
                onChange={changeField("price")}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Процент скидки</Form.Label>
              <Form.Select value={form.discount} onChange={changeField("discount")}>
                <option value="0">Без скидки</option>
                <option value="5">5%</option>
                <option value="10">10%</option>
                <option value="15">15%</option>
                <option value="20">20%</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Вес</Form.Label>
              <Form.Control
                type="text"
                value={form.wight}
                onChange={changeField("wight")}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Описание</Form.Label>
              <Form.Control
                as="textarea"
                value={form.description}
                onChange={changeField("description")}
                required
              />
            </Form.Group>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Button type="submit" className="btn-warning" disabled={isSubmitting}>
              {isSubmitting ? "Добавляем..." : "Добавить"}
            </Button>
          </Form>
        </Col>
        <Col xs={12} md={6}>
          {form.pictures && <Image src={form.pictures} className="w-100" alt="Превью товара" />}
        </Col>
      </Row>
    </Container>
  );
};

export default AddProduct;
