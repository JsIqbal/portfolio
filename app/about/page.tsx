import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";

export default function AboutPage() {
    return (
        <div>
            <h1 className={title()}>
                <Button>Click me!</Button>
            </h1>
        </div>
    );
}
