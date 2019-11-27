import utils from './utils';

export default function(index, callback) {
    const bodyUrl = `/api/body/${utils.randomNumber(4)}`;
    const eyesUrl = `/api/eye/${utils.randomNumber(15)}`;
    const mouthUrl = `/api/mouth/${utils.randomNumber(12)}`;
    
    return utils.callbackRequest(bodyUrl, function(err, body) {
        if (err) {
            console.log(err);
        }

        // utils.mountImage(body, index);

        utils.callbackRequest(eyesUrl, function(err, eyes) {
            if (err) {
              console.log(err);
            }
            // utils.mountImage(eyes, index);

            utils.callbackRequest(mouthUrl, function(err, mouth) {
                if (err) {
                  console.log(err);
                }
                utils.mountImage([body, eyes,mouth], index);
                callback();
            });
        });

    });
}