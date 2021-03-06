/*
 * cloudbeaver - Cloud Database Manager
 * Copyright (C) 2020 DBeaver Corp and others
 *
 * Licensed under the Apache License, Version 2.0.
 * you may not use this file except in compliance with the License.
 */

import { Style } from '@cloudbeaver/core-theming';

export type AdministrationItemDrawerProps = {
  item: IAdministrationItem;
  onSelect(id: string): void;
  style: Style[];
}
export type AdministrationItemDrawerComponent = React.FunctionComponent<AdministrationItemDrawerProps>

export type AdministrationItemContentProps = {
  item: IAdministrationItem;
}
export type AdministrationItemContentComponent = React.FunctionComponent<AdministrationItemContentProps>

export type AdministrationItemSubContentProps = {
  item: IAdministrationItem;
  sub: IAdministrationItemSubItem;
  param: string | null;
}
export type AdministrationItemSubContentComponent = React.FunctionComponent<AdministrationItemSubContentProps>

export type AdministrationItemEvent = () => Promise<void> | void
export type AdministrationItemSubEvent = (param: string | null) => Promise<void> | void

export interface IAdministrationItemSubItem {
  name: string;
  getComponent(): AdministrationItemSubContentComponent;
  onActivate?: AdministrationItemSubEvent;
}

export interface IAdministrationItemOptions {
  name: string;
  order?: number;
  sub?: IAdministrationItemSubItem[];
  getDrawerComponent(): AdministrationItemDrawerComponent;
  getContentComponent(): AdministrationItemContentComponent;
  onActivate?: AdministrationItemEvent;
}

export interface IAdministrationItem extends IAdministrationItemOptions {
  order: number;
  sub: IAdministrationItemSubItem[];
}
