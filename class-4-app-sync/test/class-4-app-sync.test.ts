import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Class4AppSync from '../lib/class-4-app-sync-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Class4AppSync.Class4AppSyncStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
