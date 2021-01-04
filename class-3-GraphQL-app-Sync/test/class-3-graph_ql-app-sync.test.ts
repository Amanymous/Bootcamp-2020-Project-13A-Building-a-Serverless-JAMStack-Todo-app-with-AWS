import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as Class3GraphQlAppSync from '../lib/class-3-graph_ql-app-sync-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Class3GraphQlAppSync.Class3GraphQlAppSyncStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
