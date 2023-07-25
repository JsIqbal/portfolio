import { Textarea, Grid } from "@nextui-org/react";

export default function TextArea() {
    return (
        <Grid.Container gap={2.5} css={{ mt: "4px" }}>
            <Grid>
                <Textarea
                    width="200%"
                    underlined
                    color="primary"
                    labelPlaceholder="Your Thoughts"
                />
            </Grid>
        </Grid.Container>
    );
}
