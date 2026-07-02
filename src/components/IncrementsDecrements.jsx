import { useState } from 'react'

const IncrementsDecrements = () => {
    const [number, setNumber] = useState(1)
    const [step, setStep] = useState(1)
    if (number < 0) return setNumber(0)
    if (number > 100) return setNumber(100)
    return (

        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">
                Using useState to Increment or Decrement own value
            </h2>

            <p className="text-xl font-semibold mb-4">
                Count: <span className="text-blue-600">{number}</span>
            </p>

            <div className="flex items-center gap-3 mb-6">
                <label className="font-medium">Step</label>
                <input
                    value={step}
                    onChange={(e) => setStep(Number(e.target.value))}
                    type="number"
                    className="w-24 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex gap-3">
                {/*disabled={number >= 100}  */}
                <button onClick={() => setNumber(number + step)}  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition">
                    Increment
                </button>

                <button onClick={() => setNumber(number - step)}  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition">
                    Decrement
                </button>

                <button onClick={() => setNumber(0)} className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition">
                    Reset
                </button>
            </div>
        </div>
    )
}

export default IncrementsDecrements
