import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    username() { return faker.internet.userName() },
    afterCreate(user, server) {
        server.createList('sprite', 3, { user });
    }
});
