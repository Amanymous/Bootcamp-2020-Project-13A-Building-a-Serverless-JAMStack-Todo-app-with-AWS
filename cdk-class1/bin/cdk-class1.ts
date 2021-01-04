#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkClass1Stack } from '../lib/cdk-class1-stack';

const app = new cdk.App();
new CdkClass1Stack(app, 'CdkClass1Stack');
