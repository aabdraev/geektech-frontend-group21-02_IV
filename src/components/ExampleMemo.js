import React, { useMemo, useCallback, memo, useEffect } from 'react'

const ExampleMemo = ({ log, amount }) => {

    // useMemo
    // useCallback
    // memo
    useEffect(() => {
        log("render")
    }, [log])
    return (
        <div>Memo {amount}</div>
    )
}

export default memo(ExampleMemo)