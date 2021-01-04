#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { Class2LambdaStack } from '../lib/class-2-lambda-stack';

const app = new cdk.App();
new Class2LambdaStack(app, 'Class2LambdaStack');
