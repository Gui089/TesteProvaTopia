import { api } from "../../../api/api"

interface parameterQuestion {
    year: number;
}

export const getQuestiosMatematica = async ({year}: parameterQuestion) => {
    const questios = await api.get(`/${year}/questions?limit=45&offset=136`);
    return questios;
}