import * as React from 'react'
import { Rows } from './data'
import TR from './tr'

type Props = {
    rows: Rows
}

const Component: React.FC<Props> = props => (
    <tbody>
        {props.rows.map(row => (
            <TR key={row.id} {...row} /> // スプレット演算子でrowに含まれる全プロパティを伝搬
        ))}
    </tbody>
)

export default Component