"use client";

import { Card, Col, Row, Text } from "@nextui-org/react";
import MailModal from "./ui/modal";

export const ProfileCard = () => (
    <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text
                    size={12}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffffAA"
                >
                    New
                </Text>
                <Text h3 color="black">
                    Pro camera
                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/332372799_606675764432773_5744038552095466071_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=l14T5RT0i0AAX_5FWVO&_nc_ht=scontent.fdac138-1.fna&oh=00_AfAGyNe-j_UvQkXDiLLjgeWjHkkkVQDW9qdLR9eNupNNYA&oe=64C43BD2"
                width="100%"
                height="100%"
                objectFit="cover"
                alt="Card example background"
            />
        </Card.Body>
        <Card.Footer
            isBlurred
            css={{
                position: "absolute",
                bgBlur: "#ffffff66",
                borderTop:
                    "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                bottom: 0,
                zIndex: 1,
            }}
        >
            <Row>
                <Col>
                    <Text color="#000" size={12}>
                        Available now
                    </Text>
                    <Text color="#000" size={12}>
                        service.
                    </Text>
                </Col>
                <Col>
                    <Row justify="flex-end">
                        <MailModal />
                    </Row>
                </Col>
            </Row>
        </Card.Footer>
    </Card>
);
