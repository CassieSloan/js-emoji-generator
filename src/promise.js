import utils from './utils';

export default function(index) {
    const bodyUrl = `/api/body/${utils.randomNumber(4)}`;
    const eyesUrl = `/api/eye/${utils.randomNumber(15)}`;
    const mouthUrl = `/api/mouth/${utils.randomNumber(12)}`;

    return utils.promiseRequest(bodyUrl)
        .then((body) => {
            utils.mountImage(body, index);
        })
        .catch((err) => {
            console.log(err);

}