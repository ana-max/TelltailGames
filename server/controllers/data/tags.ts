import {Request, Response} from 'express';

import Tag from '../../models/tag';
import Adventure from '../../models/adventure';
import {error404} from '../pages/errors';

export async function getTagPageData(_req: Request, res: Response): Promise<void> {
    const tag = _req.query.tagName;
    let tagOption = {};
    if (tag) {
        tagOption = {
            enName: tag
        };
    }

    Tag.findOne({
        include: [
            {
                model: Adventure,
                include: [
                    {
                        model: Tag
                    }
                ]
            }
        ],
        where: tagOption
    }).then((tag: Tag) => {
        if (!tag) {
            error404(_req, res);
            return;
        }
        const data = {
            ruName: tag.ruName,
            enName: tag.enName,
            adventures: tag.adventures
        };
        res.json(data);
    });
}
