import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItems } from "../components/StoreItems";

export const Store = () => {
  return (
    <>
      <h1>Store</h1>

      <Row md={2} xs={1} lg={3} className="gap-3">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItems {...item} />
          </Col>
        ))}
        <Col></Col>
      </Row>
    </>
  );
};
