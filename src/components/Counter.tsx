import { useState } from "react"

interface CounterProps {
    onChange: (count: number) => void
}

const Counter: React.FC<CounterProps> = ({ onChange }) => {

    const [count, setCount] = useState(0)

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
            onChange(count - 1)
        }
    }

    const increment = () => {
        setCount(count + 1)
        onChange(count + 1)
    }

    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center border border-caption rounded-lg">
                <button
                    onClick={decrement}
                    className="text-subtitleGray px-4 py-4 rounded-l hover:text-buttonBrown focus:outline-none"
                >
                    -
                </button>
                <input
                    type="text"
                    value={count}
                    readOnly
                    className="w-5 text-center focus:outline-none"
                />
                <button
                    onClick={increment}
                    className="text-subtitleGray px-4 py-4 rounded-r hover:text-buttonBrown focus:outline-none"
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default Counter

