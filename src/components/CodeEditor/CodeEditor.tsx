import React, { FC } from 'react'
import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/theme-tomorrow'
import 'ace-builds/src-min-noconflict/ext-searchbox'
import 'ace-builds/src-min-noconflict/ext-language_tools'

interface Props {
    name: string
    value: string
    onChange: (value: string) => void
    readOnly?: boolean
}

const CodeEditor: FC<Props> = (props) => {
    return (
        <AceEditor
            mode="python"
            theme="tomorrow"
            enableLiveAutocompletion
            enableBasicAutocompletion
            wrapEnabled
            className="code-editor"
            {...props}
        />
    )
}

export default CodeEditor
