/* eslint-disable */
import React from "react"
import { useCallback, useState } from "react";
import ActionBar from "./components/ActionBar.js";
import Messges from "./components/Messages.js";

const Three = () => {
    const [state, setState] = useState(0);

    const [componentMap] = useState({
        0: <Messges count={state} />,
        1: (
            <>
                <span>{state}</span>
                <Messges count={state} />
            </>
        ),
        2: (
            <>
                <span>{state}</span>
                <Messges count={state} />
                <span>{state + 1}</span>
                <Messges count={state + 1} />
            </>
        ),
        3: (
            <>
                <span>{state}</span>
                <Messges count={state} />
                <span>{state + 1}</span>
                <Messges count={state + 1} />
                <span>{state + 2}</span>
                <Messges count={state + 2} />
                <span>{state + 3}</span>
                <Messges count={state + 3} />
            </>
        ),
    });
    const handleNextClick = useCallback(() => {
        setState((prevState) => prevState + 1);
    }, []);

    const handlePreviousClick = useCallback(() => {
        setState((prevState) => prevState - 1);
    }, []);

    return (
        <>
            <h3>
                Your Task is to fix the code with
                <span className="warning"> Minimum Changes </span>
                so it can go from
                <code>"Just Start And Just Do It"</code>
                to <code>"You Just Finshed"</code>while showing the state number with
                the 2 middle messages using the <code>Next</code> and
                <code>Previous</code> Buttons, going thorugh the proper flow of messages
                which is:
            </h3>
            <p>
                <code>"Just Start And Just Do It "</code>,
            </p>
            <p>
                <span>1</span>
                <code>"Keep Going"</code>,
            </p>
            <p>
                <span>2</span>
                <code>"Almost There"</code>,
            </p>
            <p>
                <code>"You Just Finshed"</code>,
            </p>

            <br />
            <h3>
                <span className="warning"> Note: </span>
                Minimum changes means that you should change one file ONLY and just add
                something or remove something no major re location of logic or changes
                between components , the goal is to find the bug in this very simple and
                clear code not make the code work using other ways
            </h3>
            <span> {componentMap[state]}</span>
            <ActionBar
                onNextClick={handleNextClick}
                onPreviousClick={handlePreviousClick}
            />
            <br />
        </>
    );
};

export default Three;
