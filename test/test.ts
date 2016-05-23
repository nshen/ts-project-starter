/// <reference path="../typings/index.d.ts" />


import * as moduleATest from './moduleA.test';
import * as fakeTest from './fake.test';


// 所有需要测试的必须列在这里才能被webpack打包成功

moduleATest;
fakeTest;

