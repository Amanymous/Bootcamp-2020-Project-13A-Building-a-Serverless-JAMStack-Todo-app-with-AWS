import * as cdk from '@aws-cdk/core';
import { Bucket } from '@aws-cdk/aws-s3';

export class CdkClassStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new Bucket(this,'MyFirstBucket',{
      versioned: true,
    })
  }
}
