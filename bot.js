import 'dotenv/config'
import { Telegraf } from 'telegraf'
import { answers, createAnswer } from "./answer.js";

if (process.env.BOT_TOKEN === undefined) throw new TypeError('BOT_TOKEN отсутствует!')

const bot = new Telegraf(process.env.BOT_TOKEN)
const timeoutSeconds = 300

bot.start(ctx => ctx.reply(answers.greeting))

bot.on('message', async ctx => {
    const answer = createAnswer(+ctx.message.text)
    const { message_id } = await ctx.replyWithHTML(answer)
    setTimeout(() => ctx.deleteMessage(message_id).catch(() => {}), timeoutSeconds * 1000)
})

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
