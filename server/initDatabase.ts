import Achieve from './models/achieve';
import achieves from './mocks/achieves.json';
import Action from './models/action';
import actions from './mocks/actions.json';
import Adventure from './models/adventure';
import adventures from './mocks/adventures.json';
import AdventureTags from './models/adventure_tags';
import adventureTags from './mocks/adventures_tags.json';
import Scene from './models/scene';
import scenes from './mocks/scenes.json';
import SceneAchieves from './models/scene_achieves';
import sceneAchieves from './mocks/scene_achieves.json';
import Tag from './models/tag';
import tags from './mocks/tags.json';
import connectDB from './database';

async function initDB(): Promise<void> {
    async function fillTables(): Promise<void> {
        await Scene.bulkCreate(scenes);
        await Adventure.bulkCreate(adventures);
        await Tag.bulkCreate(tags);
        await AdventureTags.bulkCreate(adventureTags);
        await Achieve.bulkCreate(achieves);
        await SceneAchieves.bulkCreate(sceneAchieves);
        await Action.bulkCreate(actions);
    }

    await connectDB().then((seq) => {
        seq.sync({force: true})
            .then(fillTables);
    });
}

initDB();
