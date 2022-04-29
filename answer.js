import { passGen } from "./passgen.js";

const answers = {
    isNaN: 'Укажи числом желаемую длину пароля.',
    lessThanFour: 'Твой пароль не может быть короче 4 знаков.',
    greaterThanThousand: 'Из-за ограничений Telegram, бот не может отправить тебе пароль длинее 1000 знаков.',
    greeting: 'Привет!\nЭто бот для генерации паролей высокой сложности.\n' +
        'Бот не хранит твои пароли и удаляет сообщения через пять минут.\n\nУкажи числом желаемую длину пароля.'
}

const createAnswer = message => {
    if (isNaN(message)) return answers.isNaN
    if (message < 4) return answers.lessThanFour
    if (message > 1000) return answers.greaterThanThousand
    return passGen(message)
}

export { answers, createAnswer }