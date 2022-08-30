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

