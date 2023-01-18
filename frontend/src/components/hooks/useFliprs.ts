import {useCallback, useEffect, useState} from "react";
import {Flipr} from "../model/Flipr";
import axios from "axios";
import {FliprDTO} from "../model/FliprDTO";

const BASE_DIR: string = "/api/fliprs";

export default function useFliprs() {
    const [fliprs, setFliprs] = useState<Flipr[]>([]);

    const getAllFliprs = useCallback(async () => {
        const response = await axios.get(BASE_DIR);
        const data = await response.data;
        setFliprs(data);
        return data;
    }, []);

    const saveFlipr = useCallback(async (fliprToSave: FliprDTO) => {
        const response = await axios.post(BASE_DIR, fliprToSave);
        await getAllFliprs();
        return await response.data;
    }, [getAllFliprs]);

    const deleteFlipr = useCallback(async (id: string) => {
        const response = await axios.delete(BASE_DIR + "/" + id);
        await getAllFliprs();
        return await response.data;
    }, [getAllFliprs]);

    useEffect(() => {
        getAllFliprs()
            .catch(e => console.error(e));
    }, [getAllFliprs])

    return {fliprs, saveFlipr, deleteFlipr}
}