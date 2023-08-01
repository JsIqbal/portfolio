"use client";

import { Card, Col, Row, Text } from "@nextui-org/react";
import MailModal from "./mail-modal";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "./icons";
import ToolTipTool from "./ui/tooltip";
import Image from "next/image";

export const ProfileCard = () => (
    <Card css={{ w: "100%", h: "400px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text
                    size={30}
                    weight="bold"
                    transform="uppercase"
                    color="#ffffff"
                >
                    <ToolTipTool
                        elementContent={
                            <GithubIcon className="text-default-500" />
                        }
                        content="Let's connet to Github"
                        href={siteConfig.links.github}
                    />
                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            {/* <Card.Image
                src="./images.me.jpg"
                width="100%"
                height="100%"
                objectFit="cover"
                alt="Card example background"
            /> */}
            <Image
                src="/images/me.jpg"
                alt="My Image"
                width={500}
                height={300}
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
