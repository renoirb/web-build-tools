// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

/**
 * An object-oriented command-line parser for TypeScript projects.
 *
 * @packageDocumentation
 */

export { CommandLineAction, ICommandLineActionOptions } from './providers/CommandLineAction';
export { DynamicCommandLineAction } from './providers/DynamicCommandLineAction';
export { ScopedCommandLineAction } from './providers/ScopedCommandLineAction';

export {
  IBaseCommandLineDefinition,
  IBaseCommandLineDefinitionWithArgument,
  ICommandLineFlagDefinition,
  ICommandLineStringDefinition,
  ICommandLineStringListDefinition,
  ICommandLineIntegerDefinition,
  ICommandLineIntegerListDefinition,
  ICommandLineChoiceDefinition,
  ICommandLineChoiceListDefinition,
  ICommandLineRemainderDefinition
} from './parameters/CommandLineDefinition';

export {
  CommandLineParameterKind,
  CommandLineParameter,
  CommandLineParameterWithArgument
} from './parameters/BaseClasses';

export { CommandLineFlagParameter } from './parameters/CommandLineFlagParameter';
export { CommandLineStringParameter } from './parameters/CommandLineStringParameter';
export { CommandLineStringListParameter } from './parameters/CommandLineStringListParameter';
export { CommandLineIntegerParameter } from './parameters/CommandLineIntegerParameter';
export { CommandLineIntegerListParameter } from './parameters/CommandLineIntegerListParameter';
export { CommandLineChoiceParameter } from './parameters/CommandLineChoiceParameter';
export { CommandLineChoiceListParameter } from './parameters/CommandLineChoiceListParameter';
export { CommandLineRemainder } from './parameters/CommandLineRemainder';

export {
  CommandLineParameterProvider,
  ICommandLineParserData as _ICommandLineParserData
} from './providers/CommandLineParameterProvider';

export { ICommandLineParserOptions, CommandLineParser } from './providers/CommandLineParser';
export { DynamicCommandLineParser } from './providers/DynamicCommandLineParser';

export { CommandLineConstants } from './Constants';

export { CommandLineHelper } from './CommandLineHelper';
