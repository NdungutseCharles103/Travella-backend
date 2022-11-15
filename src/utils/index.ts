/* eslint-disable prettier/prettier */
import * as bcrypt from 'bcrypt';

export const hash = async (item: string) => {
    const hashedPassword = await bcrypt.hash(item, 10);
    return hashedPassword;
};

export const compare = async (item: string, hash: string) => {
    const compared = await bcrypt.compare(item, hash);
    return compared;
}

export const responses = {
    notfound: {
        status: 404,
        description: 'A post with given id does not exist.'
    },
    fetched: {
        status: 200,
        description: 'Data has been successfully fetched',
    }
}

