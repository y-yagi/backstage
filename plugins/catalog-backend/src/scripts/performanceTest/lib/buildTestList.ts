/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import fs from 'fs-extra';
import path from 'path';

export type Test = {
  label: string;
  path: string;
};

export async function buildTestList(): Promise<Test[]> {
  // eslint-disable-next-line no-restricted-syntax
  const testsPath = path.join(__dirname, '..', 'tests');
  const files = await fs.readdir(testsPath);
  return files.map(file => {
    return {
      label: file.replace(/\.yaml$/, ''),
      path: path.join(testsPath, file),
    };
  });
}
