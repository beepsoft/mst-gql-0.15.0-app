/* This is a mst-gql generated file, don't modify it manually */
/* eslint-disable */
/* tslint:disable */

import { IObservableArray } from "mobx"
import { types } from "mobx-state-tree"
import { MSTGQLRef, QueryBuilder, withTypedRefs } from "mst-gql"
import { ModelBase } from "./ModelBase"
import { ChoicesAggregateModel, ChoicesAggregateModelType } from "./ChoicesAggregateModel"
import { ChoicesAggregateModelSelector } from "./ChoicesAggregateModel.base"
import { ChoicesModel, ChoicesModelType } from "./ChoicesModel"
import { ChoicesModelSelector } from "./ChoicesModel.base"
import { ChoicesSelectColumn } from "./ChoicesSelectColumnEnum"
import { RootStoreType } from "./index"


/* The TypeScript type that explicits the refs to other models in order to prevent a circular refs issue */
type Refs = {
  choices: IObservableArray<ChoicesModelType>;
}

/**
 * PollsBase
 * auto generated base class for the model PollsModel.
 */
export const PollsModelBase = withTypedRefs<Refs>()(ModelBase
  .named('Polls')
  .props({
    __typename: types.optional(types.literal("polls"), "polls"),
    choices: types.union(types.undefined, types.array(MSTGQLRef(types.late((): any => ChoicesModel)))),
    choices_aggregate: types.union(types.undefined, types.late((): any => ChoicesAggregateModel)),
    created_at: types.union(types.undefined, types.null, types.frozen()),
    created_by: types.union(types.undefined, types.null, types.frozen()),
    expiration_date_time: types.union(types.undefined, types.frozen()),
    foo: types.union(types.undefined, types.null, types.string),
    id: types.identifier,
    ize: types.union(types.undefined, types.null, types.string),
    question: types.union(types.undefined, types.null, types.string),
    updated_at: types.union(types.undefined, types.null, types.frozen()),
    updated_by: types.union(types.undefined, types.null, types.frozen()),
  })
  .views(self => ({
    get store() {
      return self.__getStore<RootStoreType>()
    }
  })))

export class PollsModelSelector extends QueryBuilder {
  get created_at() { return this.__attr(`created_at`) }
  get created_by() { return this.__attr(`created_by`) }
  get expiration_date_time() { return this.__attr(`expiration_date_time`) }
  get foo() { return this.__attr(`foo`) }
  get id() { return this.__attr(`id`) }
  get ize() { return this.__attr(`ize`) }
  get question() { return this.__attr(`question`) }
  get updated_at() { return this.__attr(`updated_at`) }
  get updated_by() { return this.__attr(`updated_by`) }
  choices(builder: string | ChoicesModelSelector | ((selector: ChoicesModelSelector) => ChoicesModelSelector) | undefined, args?: { distinctOn?: ChoicesSelectColumn[], limit?: number, offset?: number, orderBy?: ChoicesOrderBy[], where?: ChoicesBoolExp }) { return this.__child(`choices(distinctOn: ${JSON.stringify(args['distinctOn'])}, limit: ${JSON.stringify(args['limit'])}, offset: ${JSON.stringify(args['offset'])}, orderBy: ${JSON.stringify(args['orderBy'])}, where: ${JSON.stringify(args['where'])})`, ChoicesModelSelector, builder) }
  choices_aggregate(builder: string | ChoicesAggregateModelSelector | ((selector: ChoicesAggregateModelSelector) => ChoicesAggregateModelSelector) | undefined, args?: { distinctOn?: ChoicesSelectColumn[], limit?: number, offset?: number, orderBy?: ChoicesOrderBy[], where?: ChoicesBoolExp }) { return this.__child(`choices_aggregate(distinctOn: ${JSON.stringify(args['distinctOn'])}, limit: ${JSON.stringify(args['limit'])}, offset: ${JSON.stringify(args['offset'])}, orderBy: ${JSON.stringify(args['orderBy'])}, where: ${JSON.stringify(args['where'])})`, ChoicesAggregateModelSelector, builder) }
}
export function selectFromPolls() {
  return new PollsModelSelector()
}

export const pollsModelPrimitives = selectFromPolls().created_at.created_by.expiration_date_time.foo.ize.question.updated_at.updated_by
