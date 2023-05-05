import { Col, Row } from "react-bootstrap";
import storeItems from "../data/items.json";
import { StoreItems } from "../components/StoreItems";

export const Store = () => {
  return (
    <>
      <h1>Store</h1>

      <Row xs={1} sm={2} lg={3} className="row-gap-4">
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItems {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};
