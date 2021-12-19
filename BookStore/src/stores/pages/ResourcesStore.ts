import { inject, injectable } from "inversify";
import { action, makeObservable, observable, runInAction } from "mobx";
import ownTypes from "../ioc/ownTypes";
import type { Resource } from "../models/Resources";
import type ResourcesService from "../services/ResourcesService";

@injectable()
export default class ResourcesStore {

    @observable resources : Resource[] = [];
    @observable isLoading = false;
    @observable totalPages = 0;
    @observable currentPage = 1;

    constructor(
        @inject(ownTypes.resourceService) private readonly resourceService: ResourcesService
   ) {
       makeObservable(this);
   }

    @action
    public init = async () => {
        this.getByPage(this.currentPage);
    }

    @action
    public changePage = async (page: number) => {
        this.currentPage = page;
        this.getByPage(page);
    }

    private getByPage = async (page: number) => {
        try {
            this.isLoading = true;
            const result = await this.resourcesService.getByPage(page);
            runInAction(()=> {
                this.resources = result.data;
                this.totalPages = result.total_pages;
            });

          } catch (e) {
            if (e instanceof Error) {
                console.error(e.message);
            }
          }
          runInAction(()=> {
            this.isLoading = false;
        });
    }
}
