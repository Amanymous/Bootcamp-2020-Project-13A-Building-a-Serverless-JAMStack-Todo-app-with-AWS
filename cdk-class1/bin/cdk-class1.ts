#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkClassStack } from '../lib/cdk-class1-stack';

const app = new cdk.App();
new CdkClassStack(app, 'CdkClassStack');

