import { atom } from 'jotai'

interface SomeInterface {
    name: string
    email: string
    number: number
}

export const emailInfo = atom<SomeInterface>({
    name: '',
    email: '',
    number: 123,
})
