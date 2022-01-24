import { KeyValue } from '../../lib/keyboard'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (key.length === 1 && key >= 'ا' && key <= 'ی') {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key value="ض" onClick={onClick} status={charStatuses['ض']} />
        <Key value="ص" onClick={onClick} status={charStatuses['ص']} />
        <Key value="ث" onClick={onClick} status={charStatuses['ث']} />
        <Key value="ق" onClick={onClick} status={charStatuses['ق']} />
        <Key value="ف" onClick={onClick} status={charStatuses['ف']} />
        <Key value="غ" onClick={onClick} status={charStatuses['غ']} />
        <Key value="ع" onClick={onClick} status={charStatuses['غ']} />
        <Key value="ه" onClick={onClick} status={charStatuses['ع']} />
        <Key value="خ" onClick={onClick} status={charStatuses['خ']} />
        <Key value="ح" onClick={onClick} status={charStatuses['ح']} />
        <Key value="ج" onClick={onClick} status={charStatuses['ج']} />
        <Key value="چ" onClick={onClick} status={charStatuses['چ']} />
      </div>
      <div className="flex justify-center mb-1">
        <Key value="ش" onClick={onClick} status={charStatuses['ش']} />
        <Key value="س" onClick={onClick} status={charStatuses['س']} />
        <Key value="ی" onClick={onClick} status={charStatuses['ی']} />
        <Key value="ب" onClick={onClick} status={charStatuses['ب']} />
        <Key value="ل" onClick={onClick} status={charStatuses['ل']} />
        <Key value="ا" onClick={onClick} status={charStatuses['ا']} />
        <Key value="ت" onClick={onClick} status={charStatuses['ت']} />
        <Key value="ن" onClick={onClick} status={charStatuses['ن']} />
        <Key value="م" onClick={onClick} status={charStatuses['م']} />
        <Key value="ک" onClick={onClick} status={charStatuses['ک']} />
        <Key value="گ" onClick={onClick} status={charStatuses['گ']} />
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          Enter
        </Key>
        <Key value="ظ" onClick={onClick} status={charStatuses['ظ']} />
        <Key value="ط" onClick={onClick} status={charStatuses['ط']} />
        <Key value="ز" onClick={onClick} status={charStatuses['ز']} />
        <Key value="ر" onClick={onClick} status={charStatuses['ر']} />
        <Key value="ذ" onClick={onClick} status={charStatuses['ذ']} />
        <Key value="د" onClick={onClick} status={charStatuses['د']} />
        <Key value="پ" onClick={onClick} status={charStatuses['پ']} />
        <Key value="و" onClick={onClick} status={charStatuses['و']} />
        <Key value="ژ" onClick={onClick} status={charStatuses['ژ']} />
        <Key width={65.4} value="DELETE" onClick={onClick}>
          Delete
        </Key>
      </div>
    </div>
  )
}
