import { Factory, association, trait } from 'ember-cli-mirage';

export default Factory.extend({
    image(i) { return `/sprites/sprite${i}.png` },
});