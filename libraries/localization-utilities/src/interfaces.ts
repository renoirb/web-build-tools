// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

/**
 * Options for the pseudolocale library.
 *
 * @internalRemarks
 * Eventually this should be replaced with DefinitelyTyped types.
 *
 * @public
 */
export interface IPseudolocaleOptions {
  prepend?: string;
  append?: string;
  delimiter?: string;
  startDelimiter?: string;
  endDelimiter?: string;
  extend?: number;
  override?: string;
}

/**
 * @public
 */
export interface ILocalizationFile {
  [stringName: string]: ILocalizedString;
}

/**
 * @public
 */
export interface ILocalizedString {
  value: string;
  comment?: string;
}
