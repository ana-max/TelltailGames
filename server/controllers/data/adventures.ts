import {Request, Response} from 'express';

import Adventure from '../../models/adventure';
import Tag from '../../models/tag';
import {IAdventureData} from '../../common/types';

export async function getAdventurePageData(_req: Request, _res: Response): Promise<void> {
    const limit = Number(_req.query.limit);
    const offset = Number(_req.query.offset);

    await Adventure.findAll({
        limit,
        offset,
        include: [
            {
                model: Tag,
                through: {attributes: []}
            }
        ]
    }).then((adventures: IAdventureData[]) => {
        _res.json(adventures);
    });
}
