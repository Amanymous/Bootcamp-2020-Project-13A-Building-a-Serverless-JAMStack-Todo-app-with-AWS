#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { Class4AppSyncStack } from '../lib/class-4-app-sync-stack';

const app = new cdk.App();
new Class4AppSyncStack(app, 'Class4AppSyncStack');
