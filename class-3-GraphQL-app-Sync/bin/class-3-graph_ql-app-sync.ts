#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { Class3GraphQlAppSyncStack } from '../lib/class-3-graph_ql-app-sync-stack';

const app = new cdk.App();
new Class3GraphQlAppSyncStack(app, 'Class3GraphQlAppSyncStack');
