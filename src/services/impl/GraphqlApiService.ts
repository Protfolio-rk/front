import type {
  ListResponse,
  MessageRequestArgs,
  ProyectBase,
  id,
  Education,
  EducationBase,
  Proyect,
  ExperienceBase,
  Experience,
} from "@/types";
import type { ApiService } from "..";
import {
  client,
  getEducationList,
  getExperienceList,
  getFullEducation,
  getFullExperience,
  getFullProyect,
  getProtyectsList,
  postMessage,
} from "@/lib/graphql";

export class GraphqlApiService implements ApiService {
  private lastCacheClear: Date | null = null;
  private getVoidListResponse<T>(page?: number): ListResponse<T> {
    return {
      docs: [] as T[],
      page: page ?? 1,
      prevPage: page ? page - 1 : null,
      totalPages: 0,
    };
  }

  private async handleCache() {
    const now = new Date();
    if (this.lastCacheClear && (now.getTime() - this.lastCacheClear.getTime()) <= 15 * 60 * 1000) return;

    await client.clearStore();
    this.lastCacheClear = now;
  }

  async getFullProyectInfo(id: string): Promise<Proyect> {
    await this.handleCache();
    const res = await getFullProyect({ id });

    if (res) return res;

    throw new ReferenceError(`Cannot find a Proyect with id: ${id}`);
  }

  async getFullEducationInfo(id: string): Promise<Education> {
    await this.handleCache();
    const res = await getFullEducation({ id });

    if (res) return res;

    throw new ReferenceError(`Cannot find a Education with id: ${id}`);
  }

  async getShortProyect(
    page?: number | undefined
  ): Promise<ListResponse<ProyectBase>> {
    await this.handleCache();
    const res = await getProtyectsList({ page });

    return res ?? this.getVoidListResponse();
  }

  async sendMessage(msg: MessageRequestArgs): Promise<id> {
    const res = await postMessage({ msg });

    return res as id;
  }

  async getShortEducation(page?: number): Promise<ListResponse<EducationBase>> {
    await this.handleCache();
    const res = await getEducationList({ page: page ?? 1 });

    return res ?? this.getVoidListResponse();
  }

  async getShortExperience(
    page?: number
  ): Promise<ListResponse<ExperienceBase>> {
    await this.handleCache();
    const res = await getExperienceList({ page });
    return res ?? this.getVoidListResponse();
  }

  async getFullExperienceInfo(id: string): Promise<Experience> {
    await this.handleCache();
    const res = await getFullExperience({ id });

    if (res) return res;

    throw new ReferenceError(`Cannot find a Experience with id: ${id}`);
  }
}
