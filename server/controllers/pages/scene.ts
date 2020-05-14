import {Request, Response} from 'express';

import Achieve from '../../models/achieve';
import Action from '../../models/action';
import Scene from '../../models/scene';
import {error404} from './errors';
import {ISceneData} from '../../common/types';

export async function getScenePage(req: Request, res: Response): Promise<void> {
    const sceneId = Number(req.query.id);
    Promise.all([
        Scene.findOne({
            include: [
                {
                    model: Achieve,
                    through: {attributes: []}
                }
            ],
            where: {
                id: sceneId
            }
        }),
        Action.findAll({
            where: {
                currentSceneId: sceneId
            }
        })
    ]).then(([scene, actions]: [Scene, Action[]]) => {
        if (!scene) {
            error404(req, res);
            return;
        }
        const data: ISceneData = {
            scene,
            actions
        };
        res.json(data);
    });
}
