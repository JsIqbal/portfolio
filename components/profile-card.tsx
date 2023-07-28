"use client";

import { Card, Col, Row, Text } from "@nextui-org/react";
import MailModal from "./ui/modal";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "./icons";
import ToolTipTool from "./ui/tooltip";

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
                    {/* <Link
                        isExternal
                        href={siteConfig.links.github}
                        aria-label="Github"
                    ></Link> */}
                    {/* <Link
                        isExternal
                        href={siteConfig.links.discord}
                        aria-label="Discord"
                    >
                        <DiscordIcon className="text-default-500" />
                    </Link> */}
                </Text>
            </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
            <Card.Image
                src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/282197946_3147856908836171_8845080577657647221_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=coTLSM2ldJ0AX9sDPcB&_nc_ht=scontent.fdac138-1.fna&oh=00_AfC01jYQKFMCmogfTlHkDaQu1w9T-o-GPUqwviCeATt22A&oe=64C81B2B"
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
