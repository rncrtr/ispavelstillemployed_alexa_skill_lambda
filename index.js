/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en-US': {
        translation: {
            FACTS : [
                "Pavel is in rare form today.",
                "Survery Says...yes.",
                "Until you open his office, Pavel is both employed and unemployed, like that famous cat.",
                "Oh no, Pavel watched Oprah. YOU get a sarcastic comment, and YOU get a sarcastic comment, and YOU get a sarcastic comment...",
                "It is said Pavel is russian. Have you ever seen him move quickly?",
                "Who wants to know?",
                "That is an unconfirmed rumor, but for now we will assume he is.",
                "If rumors are to be believed, Pavel owns a magic button that does what he wishes, cloaking, time manipulation, teleportation, and generating sarcasm.",
                "If not, Pavel has the experience and skills to be the next Santa Claus. Especially the decorum and diplomacy needed for the job.",
                "So long as Natalia does not assassinate him anytime soon.",
                "Well, someone needs to fire Joe at least once this week.",
                "You do the math.",
                "Pavel is in the kiddie pool at the moment. Please leave a message, or some vodka in his office, and he will get back to you soon.",
                "Wait, maybe it is Suresh who is still employed? No Pavel. No Suresh. Well, they both look similar and are so good looking, it is hard to tell.",
                "PavelBot activated. Employment get.",
                "To Pavel or not to Pavel, that is the question.",
                "Does a hockey stick?",
                "As long as Pavel doesn't get in a car accident",
                "As long as Pavel isn't hit by a fellow employee",
                "Pavel is lost somewhere in Spectrum, one app, or miniguide",
                "for the love of vodka, stop asking that question",
                "Could you ask me later? I'm in my one on one with Pavel right now",
                "I hear no complaints or sarcastic comments at the moment",
                "Pavel is an enigma wrapped in a mystery, wrapped in a REST API call",
                "Pavel is drawn to developers like a moth to the complexity of a flame",
                "Pavel is well known for distracting players with his good looks in youth hockey arenas",
                "Pavel lives by a code of ethics consisting of sarcasm, chrono-shaming employees who show up late to his meetings, and ritualistic weekly firings of canadian-americans",
                "Pavel considers himself the only true half-blood prince in the whole company",
                "There is a rumor that Pavel has used jenkins to get expensive dinner reservations downtown, a skill most developers don't know is even possible",
                "Pavel does not play favorites, even if you display undying loyalty, pick up his dry-cleaning, and surrender your firstborn to his service upon legal employment age, maybe"
            ],
            SKILL_NAME: 'Is Pavel Still Employed',
            GET_FACT_MESSAGE: "Here's Pavel's Employment Status: ",
            HELP_MESSAGE: 'You can say is Pavel still employed, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};