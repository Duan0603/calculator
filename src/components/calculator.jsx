import { useState } from "react"

const Calculator = () => {
  const [display, setDisplay] = useState("")
  const [isCalculating, setIsCalculating] = useState(false)
  const [error, setError] = useState("")

  const handleNumber = (value) => {
    if (!isCalculating) {
      setDisplay(prev => prev + value)
    }
  }

  const handleOperator = (operator) => {
    if (!isCalculating) {
      setDisplay(prev => prev + operator)
    }
  }

  const calculate = () => {
    if (!isCalculating) {
      setIsCalculating(true)
      setError("")
      
      setTimeout(() => {
        try {
          const calculatedResult = eval(display)
          setError("Lỗi")
        } catch {
          setError("Invalid expression! Please check your input.")
          setDisplay("")
        }
        setIsCalculating(false)
      }, 800)
    }
  }

  const clear = () => {
    if (!isCalculating) {
      setDisplay("")
      setError("")
    }
  }

  return (
    <div className="h-screen bg-gradient-to-tr from-blue-200 via-cyan-400 to-purple-200 flex items-center justify-center p-4 overflow-hidden">
      {error && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl shadow-2xl max-w-md w-[90%] mx-4 animate-slideIn">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="w-16 h-16 bg-red-500/80 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Error</h2>
              <p className="text-white/90 text-lg">{error}</p>
              <button 
                onClick={() => setError("")}
                className="mt-4 px-6 py-2 bg-white/20 hover:bg-white/30 text-white rounded-xl font-semibold transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-white/10 backdrop-blur-xl p-8 rounded-[40px] shadow-2xl w-full max-w-md mx-auto relative">
        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-6 text-shadow">Calculator</h1>
        
        {/* Display */}
        <div className="bg-white/5 rounded-3xl mb-8 p-6 shadow-inner">
          <input
            type="text"
            className="w-full bg-transparent text-right text-3xl font-bold text-white outline-none placeholder-white/50"
            value={isCalculating ? "Chat GPT Calculating..." : display}
            placeholder="0"
            readOnly
          />
        </div>

        {/* Keypad */}
        <div className="grid grid-cols-4 gap-4">
          {/* First row */}
          <button 
            onClick={clear} 
            className="col-span-2 calculator-button bg-pink-400/80 hover:bg-pink-500/80"
            disabled={isCalculating}
          >
            Clear
          </button>
          <button 
            onClick={() => handleOperator("/")} 
            className="operator-button"
            disabled={isCalculating}
          >
            /
            
          </button>
          <button 
            onClick={() => handleOperator("*")} 
            className="operator-button"
            disabled={isCalculating}
          >
            *
          </button>

          {/* Numbers and operators */}
          <button onClick={() => handleNumber("7")} className="number-button" disabled={isCalculating}>7</button>
          <button onClick={() => handleNumber("8")} className="number-button" disabled={isCalculating}>8</button>
          <button onClick={() => handleNumber("9")} className="number-button" disabled={isCalculating}>9</button>
          <button onClick={() => handleOperator("-")} className="operator-button" disabled={isCalculating}>-</button>

          <button onClick={() => handleNumber("4")} className="number-button" disabled={isCalculating}>4</button>
          <button onClick={() => handleNumber("5")} className="number-button" disabled={isCalculating}>5</button>
          <button onClick={() => handleNumber("6")} className="number-button" disabled={isCalculating}>6</button>
          <button onClick={() => handleOperator("+")} className="operator-button" disabled={isCalculating}>+</button>

          <button onClick={() => handleNumber("1")} className="number-button" disabled={isCalculating}>1</button>
          <button onClick={() => handleNumber("2")} className="number-button" disabled={isCalculating}>2</button>
          <button onClick={() => handleNumber("3")} className="number-button" disabled={isCalculating}>3</button>
          <button 
            onClick={calculate} 
            className="row-span-2 calculator-button bg-blue-500/80 hover:bg-blue-600/80"
          >
            =
          </button>

          <button onClick={() => handleNumber("0")} className="col-span-2 number-button" disabled={isCalculating}>0</button>
          <button onClick={() => handleNumber(".")} className="number-button" disabled={isCalculating}>.</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
