export default function UserInput({userInput,onHandleChange}) {

    return (
        <>
            <section id="user-input">
                <div className="input-group">
                    <p>
                        <label>Initial Investment</label>
                        <input type="number" value={userInput["initialInvestment"]} onChange={(e) => { onHandleChange("initialInvestment", e.target.value) }} required />
                    </p>
                    <p>
                        <label>Annual Investment</label>
                        <input type="number"  value={userInput["annualInvestment"]} onChange={(e) => { onHandleChange("annualInvestment", e.target.value) }} required />
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label>Expected Return</label>
                        <input type="number" value={userInput["expectedReturn"]} onChange={(e) => { onHandleChange("expectedReturn", e.target.value) }} required />
                    </p>
                    <p>
                        <label>Duration</label>
                        <input type="number" value={userInput.duration} onChange={(e) => { onHandleChange("duration", e.target.value) }} required />
                    </p>
                </div>
            </section>
        </>
    )
}