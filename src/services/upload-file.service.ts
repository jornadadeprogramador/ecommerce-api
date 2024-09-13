import fs from "node:fs";
import { getStorage, getDownloadURL } from "firebase-admin/storage";
import { fileTypeFromBuffer } from "file-type";
import { randomUUID } from "node:crypto";

export class UploadFileService {

    constructor(private path: string = "") { }

    async upload(base64: string): Promise<string> {
        const fileBuffer = Buffer.from(base64, "base64");

        const fileType = await fileTypeFromBuffer(fileBuffer);

        const fileName = `${randomUUID().toString()}.${fileType?.ext}`;
        fs.writeFileSync(fileName, fileBuffer);

        const bucket = getStorage().bucket("e-commerce-d1288.appspot.com");
        const uploadResponse = await bucket.upload(fileName, {
            destination: this.path + fileName
        });

        fs.unlinkSync(fileName);

        return getDownloadURL(uploadResponse[0]);
    }
}