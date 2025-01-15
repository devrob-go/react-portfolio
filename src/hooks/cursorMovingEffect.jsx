import { useMouseMove, useValue, animate } from "react-ui-animate";

const CURSOR_SIZE = 0;

export default function App() {
    const x = useValue(0);
    const y = useValue(0);

    useMouseMove(({ mouseX, mouseY }) => {
        x.value = mouseX - CURSOR_SIZE / 2;
        y.value = mouseY - CURSOR_SIZE / 2;
    });

    return (
        <animate.div 
            className="cursor-shadow"
            style={{
                width: CURSOR_SIZE,
                height: CURSOR_SIZE,
                display: "inline-block",
                borderRadius: "50%",
                translateX: x.value,
                translateY: y.value,
            }}
        />
    );
}