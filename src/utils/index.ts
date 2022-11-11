/* eslint-disable prettier/prettier */
import bcrypt from 'bcrypt';

export const hash = async (item: string) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(item, salt);
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

