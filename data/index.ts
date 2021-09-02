import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

// Create an AWS resource (S3 Bucket)

const currentStack = pulumi.getStack()

const foundationStack = new pulumi.StackReference(`abjrcode/foundation/${currentStack}`)

new aws.s3.BucketObject('the-one-and-only', {
    bucket: foundationStack.requireOutput('bucketName'),
    content: 'cannot believe it'
})
